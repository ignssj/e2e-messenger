import { testServer } from "../jest.setup";

describe('Users - Get All', () => {

    beforeAll(async () => {
        const response = await testServer.post('/api/users')
        .send({
            username: 'testuser',
            password: 'p455w0rd'
        });
        expect(response.status).toBe(201);
    });

    it('Return status 200 on success', async () => {
        const users = await testServer.get('/api/users');
        expect(users.statusCode).toBe(200);
    });

    it('Return registers', async () => {
        const users = await testServer.get('/api/users');
        expect(Number(users.header['x-total-count'])).toBeGreaterThan(0);
        expect(users.body.length).toBeGreaterThan(0);
    });
});