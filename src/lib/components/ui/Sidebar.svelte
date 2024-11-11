<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, Drawer, CloseButton } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline, BrainSolid } from 'flowbite-svelte-icons';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    
    let spanClass = 'flex-1 ms-3 whitespace-nowrap';
    $: activeUrl = $page.url.pathname;
  
    let width;
    let drawerHidden = true;
    let breakpoint = 1024;
  
    // Toggle the sidebar visibility in drawer mode
    const toggleDrawer = () => {
      drawerHidden = !drawerHidden;
    };
  
    // Check screen width on mount and resize to adjust drawer behavior
    onMount(() => {
      drawerHidden = width < breakpoint;
    });
  
    $: if (width >= breakpoint) {
      drawerHidden = false;
    } else {
      drawerHidden = true;
    }
  </script>
  
  <svelte:window bind:innerWidth={width} />
  
  <!-- Header with a Hamburger Icon for Drawer toggle on small screens -->
  <header class="bg-[#1B2845] text-white p-4 flex items-center justify-between">
    <button class="lg:hidden" on:click={toggleDrawer}>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z" clip-rule="evenodd" />
      </svg>
    </button>

  </header>
  
  <!-- Sidebar in Drawer Mode for smaller screens -->
  <Drawer bind:hidden={drawerHidden} width="w-64" class="h-screen bg-[#1B2845] text-white">
    <CloseButton on:click={() => (drawerHidden = true)} class="dark:text-white lg:hidden" />
    <Sidebar class="h-full">
      <SidebarWrapper class="flex flex-col h-full bg-[#1B2845] text-white">
        <SidebarGroup>
          <SidebarItem href='/app/knowledge' label="Knowledge Bases" class="text-white">
            <svelte:fragment slot="icon">
              <BrainSolid class="w-6 h-6 text-white" />
            </svelte:fragment>
          </SidebarItem>

        </SidebarGroup>
      </SidebarWrapper>
    </Sidebar>
  </Drawer>
  
  <!-- Sidebar for large screens (fixed) -->
  <Sidebar class="hidden lg:block h-screen fixed bg-[#1B2845] w-64 text-white">
    <SidebarWrapper class="flex flex-col h-full bg-[#1B2845] text-white">
      <SidebarGroup>
        <SidebarItem href='/app/knowledge' label="Knowledge Bases" class="text-white">
          <svelte:fragment slot="icon">
            <BrainSolid class="w-6 h-6 text-white" />
          </svelte:fragment>
        </SidebarItem>

      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  
 