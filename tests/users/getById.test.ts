import { testServer } from "../jest.setup";

describe('Users - GetById', () => {

    it('Return status 200 on success', async () => {
        const user = await testServer.post('/api/users')
        .send({
            username: 'testuser',
            password: 'p455w0rd'
        });
        expect(user.statusCode).toBe(201);
        const get = await testServer.get('/api/users/'+ user.body.id);
        expect(get.statusCode).toBe(200);
    });

    it('Return register', async () => {
        const user = await testServer.post('/api/users')
        .send({
            username: 'testuser',
            password: 'p455w0rd'
        });
        expect(user.statusCode).toBe(201);
        const get = await testServer.get('/api/users/'+ user.body.id);
        expect(get.body).toHaveProperty('username');
        expect(get.body).toHaveProperty('password');
        expect(get.body).toHaveProperty('id');
    });
});