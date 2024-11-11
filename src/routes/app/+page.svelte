<script>
    import { page } from '$app/stores';

    import ChatWindow from '$lib/components/ui/ChatWindow.svelte';
    import Sidebar from '$lib/components/ui/Sidebar.svelte'
  </script>
  
  <div class="flex h-full">


    <Sidebar/>

    <div class="flex-grow py-4 flex justify-center items-center">
      <ChatWindow />
    </div>
  </div>
  