import { testServer } from "../jest.setup";

describe('Users - Delete', () => {

    it('Return 200 on success and 404 when register was not found', async () => {
        const user = await testServer.post('/api/users');
        expect(user.statusCode).toBe(201);
        let deleted = await testServer.delete('/api/users/'+ user.body.id);
        expect(deleted.statusCode).toBe(200);
        deleted = await testServer.delete('/api/users/'+ user.body.id);
        expect(deleted.statusCode).toBe(404);
    });

    it('Return user register on success', async () => {
        const user = await testServer.post('/api/users');
        let deleted = await testServer.delete('/api/users/'+ user.body.id);
        expect(deleted.body).toHaveProperty('username');
        expect(deleted.body).toHaveProperty('password');
    });
});