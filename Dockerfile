FROM node:23-alpine AS base

WORKDIR /usr/src/app

FROM base AS deps

COPY package.json pnpm-*.yaml ./
COPY tsconfig.json tsconfig.json

RUN corepack enable pnpm && pnpm install --frozen-lockfile

FROM deps AS dev

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY . .

CMD ["pnpm", "dev"]

FROM deps AS builder

COPY . .

RUN pnpm build

FROM node:23-alpine AS runner

WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN apk add --no-cache libc6-compat
RUN corepack enable pnpm

COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/pnpm-*.yaml ./
COPY --from=builder /usr/src/app/tsconfig.json ./tsconfig.json
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public

RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000

CMD ["pnpm", "start"]

