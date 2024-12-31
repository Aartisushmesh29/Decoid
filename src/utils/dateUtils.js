/**
 * Utility function to get all days in a given month.
 * 
 * @param {Date} date - The date object representing the month and year to fetch days for.
 * @returns {Array} An array of day objects for the given month, including placeholders for alignment.
 * Each day object contains:
 * - `date`: The date object for the specific day (or undefined for placeholders).
 * - `isToday`: A boolean indicating if the day is the current day.
 */
export const getDaysInMonth = (date) => {
    const year = date.getFullYear(); // Extract the year from the provided date
    const month = date.getMonth();  // Extract the month (0-indexed) from the provided date
    const days = [];                // Array to store the days of the month
    const today = new Date();       // Current date for comparison
  
    // Calculate the first day of the month's position in the week (0 = Sunday, 6 = Saturday)
    const firstDay = new Date(year, month, 1).getDay();
  
    // Get the total number of days in the month
    const lastDate = new Date(year, month + 1, 0).getDate();
  
    // Fill with placeholder objects for alignment (empty days before the first day of the month)
    for (let i = 0; i < firstDay; i++) {
      days.push({});
    }
  
    // Populate the array with day objects for each date in the month
    for (let i = 1; i <= lastDate; i++) {
      const day = new Date(year, month, i); // Create a new Date object for the day
      days.push({
        date: day, // The actual date
        isToday: day.toDateString() === today.toDateString(), // Check if this day is today
      });
    }
  
    return days; // Return the array of day objects
  };
  