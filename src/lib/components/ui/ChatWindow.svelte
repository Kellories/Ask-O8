<script>
    import { onMount, afterUpdate } from 'svelte';
    import MessageInput from './MessageInput.svelte';
  
    let messages = [];
    let messageContainer;
    let selectedKnowledgeBase = "";
  
    const knowledgeBases = ["General Knowledge", "Science", "Technology", "History", "Mathematics"];
  
    const sendMessage = (message) => {
      messages = [...messages, { text: message, sender: 'user' }];
      messages = [...messages, { text: `This is a response from the bot about ${selectedKnowledgeBase}.`, sender: 'bot' }];
    };
  
    const scrollToBottom = () => {
      if (messageContainer) {
        messageContainer.scrollTop = messageContainer.scrollHeight;
      }
    };
  
    afterUpdate(scrollToBottom);
  </script>
  
  <div class="flex flex-col items-center justify-center w-full h-full pt-8">
    <div class="flex flex-col w-full max-w-3xl h-[80vh] bg-white rounded-lg shadow-lg p-4">
      <!-- Dropdown for selecting Knowledge Base, aligned to the left -->
      <div class="self-start mb-4">
        <label for="knowledgeBase" class="sr-only">Select Knowledge Base:</label>
        <select
          id="knowledgeBase"
          bind:value={selectedKnowledgeBase}
          class="bg-[#1b2845] text-white px-3 py-2 rounded-md font-medium"
        >
          <option value="" disabled selected>Select...</option>
          {#each knowledgeBases as knowledgeBase}
            <option value={knowledgeBase}>{knowledgeBase}</option>
          {/each}
        </select>
      </div>
  
      <!-- Chat Messages Area with fixed height and scrolling -->
      <div bind:this={messageContainer} class="flex-grow overflow-y-auto mb-2 bg-gray-50 p-4 rounded-lg">
        {#each messages as message}
          <div class="{message.sender === 'user' ? 'text-right' : 'text-left'} my-2">
            <div class="{message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'} inline-block px-4 py-2 rounded-2xl max-w-[70%] shadow-md">
              <p>{message.text}</p>
            </div>
          </div>
        {/each}
      </div>
  
      <!-- Message Input -->
      <MessageInput on:send={(event) => sendMessage(event.detail)} />
    </div>
  </div>
  