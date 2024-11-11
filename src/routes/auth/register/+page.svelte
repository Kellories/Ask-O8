<script>
    import { goto } from '$app/navigation';
    import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
    import Input from '$lib/components/ui/input/input.svelte';
    let email = '';
    let password = '';
    let errorMessage = '';

    async function register() {
        const res = await fetch('/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (res.ok) {
            goto('/auth/login');  // Redirect to login page after successful registration
        } else {
            const { error } = await res.json();
            errorMessage = error;
        }
    }
</script>


<Card.Root class="mx-auto max-w-md p-6 shadow-md">
	<Card.Header>
		<Card.Title class="text-3xl font-thin">Register</Card.Title>
		<Card.Description>Sign up for AskO8!</Card.Description>
	</Card.Header>
	<Card.Content>
        <form on:submit|preventDefault={register}>
            <h2>Register</h2>
            <Input type="email" bind:value={email} placeholder="Email" required  class="my-3 w-full"/>
            <Input type="password" bind:value={password} placeholder="Password" required class="my-3 w-full" />
            {#if errorMessage}
                <p class="text-red-500 mb-3">{errorMessage}</p>
            {/if}
            <Button type="submit">Register</Button>
        </form>
	</Card.Content>
</Card.Root>