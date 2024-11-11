<script>
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import Input from '$lib/components/ui/input/input.svelte';
    
    let email = '';
    let password = '';
    let errorMessage = ''; // Store error message

    async function login() {
        const res = await fetch('/auth/login/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (res.ok) {
            const { user } = await res.json();
            console.log('Logged in user:', user);
            goto('/app');  // Redirect after successful login
        } else {
            const { error } = await res.json();
            errorMessage = error; // Display error message in the UI
        }
    }
</script>

<Card.Root class="mx-auto max-w-md p-6 shadow-md">
	<Card.Header>
		<Card.Title class="text-3xl font-thin">Login</Card.Title>
		<Card.Description>Enter your Email and Password</Card.Description>
	</Card.Header>
	<Card.Content>
		<form on:submit|preventDefault={login}>
			<Input type="email" bind:value={email} placeholder="Email" required class="my-3 w-full" />
			<Input type="password" bind:value={password} placeholder="Password" required class="my-3 w-full" />
			
            <!-- Error message display -->
			{#if errorMessage}
				<p class="text-red-500 mb-3">{errorMessage}</p>
			{/if}

			<!-- Use Button component here if desired -->
			<Button type="submit" class="w-full flex items-center justify-center gap-2 mt-3">
				<Icon icon="mdi:email" class="h-6 w-6" />
				<span>Login with Email</span>
			</Button>
		</form>
		<p class="text-center mt-4">
            Don’t have an account? <a href="/auth/register" class="text-blue-500 hover:underline">Register</a>
        </p>
	</Card.Content>
</Card.Root>
