import { testServer } from "../jest.setup";

describe('Users - Create', () => {

    it('Return status 201 on success', async () => {
        const response = await testServer.post('/api/users')
        .send({
            username: 'testuser',
            password: 'p455w0rd'
        });
        expect(response.status).toBe(201);
    });

    it('Return status 400 on fail', async () => {
        const response = await testServer.post('/api/users')
        .send({
            username: 'test',
            password: 'p455'
        });
        expect(response.status).toBe(400);
    });

    it('Fail on short body props', async () => {
        const response = await testServer.post('/api/users')
        .send({
            username: 'test',
            password: 'p455'
        });
        expect(response.body).toHaveProperty('errors.body.username');
        expect(response.body).toHaveProperty('errors.body.password');
    });
      
});
