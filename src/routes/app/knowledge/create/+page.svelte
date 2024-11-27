<script lang="ts">
    import { goto } from '$app/navigation'; // For navigation
    import { onMount } from 'svelte';

    // Form data
    let knowledgeBase = {
        display: ''
    };

    // Handle form submission
    const createKnowledgeBase = async (event: Event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            const res = await fetch('/api/createKnowledgeBase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(knowledgeBase),
            });

            if (res.ok) {
                // Redirect to the main page after successful creation
                goto('/app/knowledge');
            } else {
                const error = await res.json();
                console.error('Error creating knowledge base:', error);
                alert('Failed to create knowledge base');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('An error occurred while creating the knowledge base');
        }
    };

    // Navigate back to the main page
    const goBack = () => {
        goto('/app/knowledge');
    };
</script>

<main class="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
    <div class="w-full max-w-lg bg-white p-6 rounded-md shadow-md">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Create Knowledge Base</h1>
        <form>
            <div class="mb-4">
                <label for="display" class="block text-sm font-medium text-gray-700">Display Name</label>
                <input
                    id="display"
                    type="text"
                    bind:value={knowledgeBase.display}
                    class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter display name"
                    required
                />
            </div>

            <!-- Buttons -->
            <div class="flex justify-between">
                <button
                    type="button"
                    class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    on:click={goBack}
                >
                    Cancel
                </button>
                <button
                    on:click={createKnowledgeBase}
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Create
                </button>
            </div>
        </form>
    </div>
</main>
