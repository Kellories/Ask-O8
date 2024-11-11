<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import Icon from '@iconify/svelte';
</script>

<div>
	<Card.Root class="mx-auto max-w-full">
		<Card.Header>
			<Card.Title class="text-5xl font-thin text-[#65AFFF]">
				AskO8
				<img src = "https://o8.socialservicesconnect.com/wp-content/uploads/2024/09/9f9b0796-09aa-439f-a1ca-1c14366ec148-1-1-scaled-1-1024x600.jpg" class = "rounded-xl mt-3" alt='octopus8 aws event'/>
			</Card.Title>

			<!-- <Card.Description>Choose a provider to login with</Card.Description> -->
		</Card.Header>
		<Card.Content>
			<Button href="/auth/login" class="group/loginButton bg-[#65AFFF] w-full">
				<div class="flex items-center gap-2">
					<div>Login</div>
					<Icon
						icon="mdi:login"
						class="h-5 w-5 transition-all duration-300 md:group-hover/loginButton:translate-x-1"
					/>
				</div>
			</Button>
			<Button href="/auth/register" class="group/loginButton bg-[#65AFFF] my-2 w-full">
				<div class="flex items-center gap-2 ">
					<div>Register</div>
					<Icon
						icon="mdi:login"
						class="h-5 w-5 transition-all duration-300 md:group-hover/loginButton:translate-x-1"
					/>
				</div>
			</Button>
		</Card.Content>
	</Card.Root>
</div>
