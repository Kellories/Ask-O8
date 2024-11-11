<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let message = '';
  
    const handleSend = () => {
      if (message.trim()) {
        dispatch('send', message);
        message = '';
      }
    };
  </script>
  
  <div class="flex items-center gap-2 p-2 bg-[#1e3a5f] rounded-lg">
    <input 
      type="text" 
      placeholder="What would you like to ask?"
      bind:value={message} 
      class="flex-grow px-3 py-2 rounded-lg border-none outline-none bg-white placeholder-gray-400"
      on:keydown={(e) => e.key === 'Enter' && handleSend()}
    />
    <button class="bg-[#2a4b7b] text-white px-4 py-2 rounded-lg hover:bg-blue-800" on:click={handleSend}>
      ➤
    </button>
  </div>
  