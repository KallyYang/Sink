<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next'
import { useSidebar } from '@/components/ui/sidebar'

interface User {
  name: string
  email: string
  avatar: string
}

const { isMobile } = useSidebar()

const hostname = computed<string>(() => {
  if (import.meta.client) {
    return window.location.hostname
  }
  return 'localhost'
})

const user = computed<User>(() => ({
  name: 'Root',
  email: `root@${hostname.value}`,
  avatar: '/sink.png',
}))
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="
              data-[state=open]:bg-sidebar-accent
              data-[state=open]:text-sidebar-accent-foreground
            "
          >
            <Avatar class="h-8 w-8 rounded-full">
              <AvatarImage :src="user.avatar" :alt="user.name" />
              <AvatarFallback class="rounded-full">
                R
              </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{{ user.name }}</span>
              <span class="truncate text-xs">{{ user.email }}</span>
            </div>
            <ChevronsUpDown class="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar class="h-8 w-8 rounded-full">
                <AvatarImage :src="user.avatar" :alt="user.name" />
                <AvatarFallback class="rounded-full">
                  R
                </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ user.name }}</span>
                <span class="truncate text-xs">{{ user.email }}</span>
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
