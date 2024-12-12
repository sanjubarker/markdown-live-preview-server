# Markdown to HTML Converter API

This is a Node.js application that provides an API to convert Markdown text into HTML using the [marked](https://github.com/markedjs/marked) library. It supports JSON input and outputs the corresponding HTML.

## Features

- Converts Markdown syntax to HTML.
- Handles errors and validates input.
- Uses CORS for cross-origin requests.
- Simple and lightweight implementation.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/sanjubarker/markdown-live-preview-server.git
   cd markdown-live-preview-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node app.js
   ```
   OR
   ```bash
   npm run dev 
   ```

   The server will run on `http://localhost:5000`.

2. Make a POST request to the `/convert` endpoint with the following JSON payload:

   ```json
   {
     "markdown": "# Hello, World!"
   }
   ```

3. You will receive a response like:

   ```json
   {
     "html": "<h1>Hello, World!</h1>"
   }
   ```

## API Endpoints

### POST `/convert`

#### Request

- **Headers**: `Content-Type: application/json`
- **Body**:

  ```json
  {
    "markdown": "<markdown-text>"
  }
  ```

#### Response

- **200 OK**:

  ```json
  {
    "html": "<converted-html>"
  }
  ```

- **400 Bad Request**:

  ```json
  {
    "error": "Markdown input is required"
  }
  ```

- **500 Internal Server Error**:

  ```json
  {
    "Error": "Internal Error"
  }
  ```

## Libraries Used

- [Express](https://expressjs.com/) - Web framework for Node.js
- [body-parser](https://www.npmjs.com/package/body-parser) - Parses incoming request bodies
- [marked](https://www.npmjs.com/package/marked) - Markdown parser and compiler
- [cors](https://www.npmjs.com/package/cors) - Middleware to enable CORS

## Notes

- Ensure the server port (5000) is available before starting the application.
- For production use, additional optimizations such as input sanitization and rate limiting should be implemented.

## License

This project is licensed under the MIT License. Feel free to use and modify it.

---

For any issues or feature requests, feel free to open an issue or a pull request in the repository!
