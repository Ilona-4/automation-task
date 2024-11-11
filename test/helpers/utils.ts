export function generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2, 10); 
    const domain = 'test.com';
    return `user_${randomString}@${domain}`;
  }