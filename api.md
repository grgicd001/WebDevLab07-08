# API Reference ⚙️

The PaperBeam API lets you control layouts programmatically.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/layouts` | List all layouts |
| POST | `/api/layouts` | Create a new layout |
| DELETE | `/api/layouts/:id` | Delete a layout |

## Authentication

All API requests require a Bearer token in the header.
```js
fetch('https://api.paperbeam.io/layouts', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
});
```

::: warning Rate Limits
Free tier accounts are limited to 100 requests per hour.
:::

## Response Format

All responses return JSON in the following shape:
```js
{
  status: 'ok',
  data: { ... },
  meta: { page: 1, total: 42 }
}
```

### Error Codes

- `401` — Unauthorized
- `404` — Not found
- `429` — Rate limit exceeded