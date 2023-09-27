import { testServer } from "../jest.setup";

describe('User - Update', () => {

    it('Return 200 on successful update', async () => {
        const response = await testServer.post('/api/users')
        .send({
            username: 'testuser',
            password: 'p455w0rd'
        });
        const update = await testServer.put('/api/users/'+response.body.id).send({
            username: 'differentuser',
            password: 'differnetpassword'
        });
        expect(update.statusCode).toBe(200);
    });

    it('Return 404 on register not found', async () => {
        const update = await testServer.put('/api/users/28137128').send({
            username: 'differentuser',
            password: 'differnetpassword'
        });
        expect(update.statusCode).toBe(200);
    });
});