# TicketApp — Twig (PHP) Implementation

## Project Overview

A server-rendered version of the TicketApp using **Twig** for templating and a minimal PHP backend (can be run with the built-in PHP server). This implementation mirrors the UI/UX and rules used in the React and Vue versions. Authentication is still simulated, stored in `localStorage` via client-side script to keep parity (server session alternative noted below).

## Features

-   Responsive landing page with wavy SVG hero and decorative shapes
-   Login/Signup pages with client-side validation and server-side fallback validation
-   Dashboard & Ticket Management rendered with Twig templates
-   Full CRUD for tickets (client-side JS + PHP endpoints or `json-server` alternative)

## Tech & Libraries

-   PHP 8+
-   Twig
-   Optional: Slim Framework or small router
-   Tailwind CSS (via build or CDN)
-   Axios / fetch for AJAX requests
-   json-server (optional) for a mock REST API
