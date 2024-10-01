// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../../Backend/src/models/userModel'; // User model ko import karo
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, password, role } = req.body; // Request body se data nikalo

        // Yahan aap validations bhi kar sakte hain
        try {
            // Naya user record database me banao
            const newUser = await User.create({
                name,
                email,
                password, // Password ko hash karna na bhoolen
                role,
            });

            // Success response do
            res.status(200).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        // Agar koi aur HTTP method hai toh
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
