# User Registration API Documentation

## Endpoint: `/users/register`

This endpoint allows users to register by providing their personal details and login credentials. It validates the input data and saves the user in the database.

---

### **Request Type**
`POST`

---

### **Request Body**
The endpoint expects a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min: 3 characters, required)",
    "lastname": "string (min: 3 characters, required)"
  },
  "email": "string (valid email, required)",
  "password": "string (min: 6 characters, required)"
}
```

### **Example Request**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

---

### **Response**

#### **Success (201 Created)**
The user is successfully registered, and their details are saved in the database.

**Response Body**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "string",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### **Client Errors**

- **400 Bad Request**: Input validation failed.
  - Missing or invalid `firstname`, `lastname`, `email`, or `password`.

**Response Body**
```json
{
  "errors": [
    {
      "field": "email",
      "message": "Invalid email"
    }
  ]
}
```

- **409 Conflict**: The email is already registered.

**Response Body**
```json
{
  "message": "Email already exists"
}
```

#### **Server Errors**

- **500 Internal Server Error**: Unexpected error during user registration.

**Response Body**
```json
{
  "message": "An error occurred while processing your request"
}
```

---

### **Validation Rules**
1. **Fullname**
   - `firstname`: Required, minimum 3 characters.
   - `lastname`: Required, minimum 3 characters.

2. **Email**
   - Must be a valid email address.
   - Must be unique.

3. **Password**
   - Required, minimum 6 characters.

---

### **Authorization**
No authorization required for this endpoint.

---

### **Headers**
Content-Type: `application/json`

---

### **Additional Notes**
- Passwords are securely hashed using `bcrypt` before storing in the database.
- Ensure that the `JWT_SECRET` environment variable is properly configured for token generation.
