import { SOMEBODY_SCREAM_BACKEND_URL } from '$env/static/private';

export async function load({ fetch }) {
    async function getTodos() {
        const res = await fetch(`${SOMEBODY_SCREAM_BACKEND_URL}/todos`)
        return await res.json();
    }    
    const todos = await getTodos();
    return { todos };
}