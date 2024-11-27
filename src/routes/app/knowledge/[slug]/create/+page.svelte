<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    let slug: string = '';
    $: slug = $page.params.slug;

    let content: string = '';
    let pdfFile: File | null = null;
    let mode: 'text' | 'pdf' = 'text'; // Track whether the user is using text or PDF
    let loading = false;
    let errorMessage = '';

    // Handle file upload
    const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
            pdfFile = target.files[0];
        }
    };

    // Submit content or PDF
    const createContent = async () => {
        loading = true;
        try {
            const formData = new FormData();
            formData.append('knowledgebaseid', slug);

            if (mode === 'text') {
                if (!content.trim()) {
                    throw new Error('Content cannot be empty');
                }
                formData.append('content', content);
            } else if (mode === 'pdf' && pdfFile) {
                formData.append('file', pdfFile);
            } else {
                throw new Error('Please upload a valid PDF file');
            }

            const res = await fetch(`/api/uploadDocument`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to create content');
            }

            // Redirect back to the knowledge base page
            goto(`/app/knowledge/${slug}`);
        } catch (error) {
            errorMessage = error.message || 'An unexpected error occurred';
        } finally {
            loading = false;
        }
    };
</script>

<main class="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
    <div class="w-full max-w-lg bg-white p-6 rounded-md shadow-md">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Create New Content</h1>

        {#if errorMessage}
            <p class="text-red-500 mb-4">{errorMessage}</p>
        {/if}

        <!-- Content Creation Mode -->
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Choose Creation Method</label>
            <div class="mt-2 flex space-x-4">
                <button
                    on:click={() => (mode = 'text')}
                    class={`px-4 py-2 rounded-lg transition duration-200 ${
                        mode === 'text' ? 'text-blue-600 bg-blue-100' : 'text-gray-600 bg-gray-100'
                    }`}
                >
                    Text
                </button>
                <button
                    on:click={() => (mode = 'pdf')}
                    class={`px-4 py-2 rounded-lg transition duration-200 ${
                        mode === 'pdf' ? 'text-blue-600 bg-blue-100' : 'text-gray-600 bg-gray-100'
                    }`}
                >
                    Upload PDF
                </button>
            </div>
        </div>

        <!-- Text Input -->
        {#if mode === 'text'}
            <textarea
                bind:value={content}
                placeholder="Enter your content here..."
                rows="6"
                class="w-full mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
        {/if}

        <!-- PDF Upload -->
        {#if mode === 'pdf'}
            <div class="mt-4">
                <label for="pdf-upload" class="block text-sm font-medium text-gray-700">Upload PDF</label>
                <input
                    id="pdf-upload"
                    type="file"
                    accept=".pdf"
                    on:change={handleFileUpload}
                    class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                />
            </div>
        {/if}

        <!-- Submit Button -->
        <button
            on:click={createContent}
            class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={loading}
        >
            {#if loading}
                Saving...
            {:else}
                Save Content
            {/if}
        </button>

        <!-- Cancel Button -->
        <button
            on:click={() => goto(`/app/knowledge/${slug}`)}
            class="mt-2 w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200"
        >
            Cancel
        </button>
    </div>
</main>
