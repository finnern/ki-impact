exports.handler = async function(event, context) {
    const SHEET_ID = '1RiDhCY8npiiHkBjJBJA-5tOqgGt3--o8nAPxG3474JU';
    const GID = '0';
    const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;
  
    try {
      // This now uses the built-in fetch, no 'require' needed.
      const response = await fetch(GOOGLE_SHEET_URL);
      if (!response.ok) {
        return {
          statusCode: response.status,
          body: response.statusText,
        };
      }
      const data = await response.text();
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'text/csv',
        },
        body: data,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Fehler beim Abrufen des Google Sheets.' }),
      };
    }
  };