# HCMUTE-CTF 2025 Qualification

Intended Solution for MAL, MALD and BALD MAL

## MAL

Ở chỗ update user (POST /user/:username/edit) code bị lỗi logic khi check username đã tồn tại hay chưa.

```javascript
// Vulnerable code example
const existingUser = await User.findOne({ username: req.body.username });
if (existingUser && existingUser.id !== req.user.id) {
  return res.status(400).json({ error: 'Username already exists' });
}
```

The vulnerability allows attackers to bypass the username check and potentially take over other accounts.

## Exploitation

1. First, create a normal user account
2. Then exploit the logic flaw in the update endpoint
3. Change your username to an admin username
4. Gain elevated privileges

## Flag

`HCMUTE{example_flag_here}`

## Lessons Learned

- Always validate user input properly
- Implement proper authentication checks
- Use parameterized queries to prevent injection attacks
