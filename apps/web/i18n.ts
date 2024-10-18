/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Define your supported locales
export const locales = ['en', 'vi', 'jp'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Return the proper locale messages
  try {
    return {
      messages: (await import(`./src/messages/${locale}.json`)).default
    };
  } catch (error) {
    notFound(); // Handle missing locale messages
  }
});
