'use server';

export const catchAllActions = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error('Failed to execute action');
    }

    return res.json();
  } catch (err) {
    console.error('💥 Failed to execute action:', err);

    if (err instanceof Error) {
      throw new Error(err.message || 'Failed to execute action');
    }

    throw new Error('Failed to execute action');
  }
};
