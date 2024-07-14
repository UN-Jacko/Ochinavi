/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NOy80gVutDV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
            <FlagIcon className="h-6 w-6 text-red-500" />
            <span>落ちナビ</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <SearchIcon className="h-5 w-5 text-muted-foreground" />
              <span className="sr-only">Search</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Notifications</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-2">
              <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Failure Stories</h1>
                <Button>
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Share Your Story
                </Button>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h2 className="mb-4 text-2xl font-bold">My Startup Failed, But I Learned So Much</h2>
                    <p className="mb-4">
                      I poured my heart and soul into my startup, but after 2 years of hard work, it just didn't take
                      off. I was devastated, but I realized that failure is a necessary part of the entrepreneurial
                      journey. Here's what I learned...
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-red-100 text-red-500">
                        Startup
                      </Badge>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-500">
                        Entrepreneurship
                      </Badge>
                      <Badge variant="outline" className="bg-blue-100 text-blue-500">
                        Lessons Learned
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon">
                        <HeartIcon className="h-5 w-5 text-red-500" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
                        <span className="sr-only">Comment</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ShareIcon className="h-5 w-5 text-muted-foreground" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUpIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">125</span>
                      <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">42</span>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jane Smith</p>
                        <p className="text-sm text-muted-foreground">1 week ago</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h2 className="mb-4 text-2xl font-bold">How I Failed at My Dream Job and Found a New Passion</h2>
                    <p className="mb-4">
                      I had always dreamed of working at a big tech company, but when I finally got my dream job, I
                      realized it wasn't what I expected. I struggled to fit in and felt like a failure. But this
                      experience led me to discover a new passion that I'm now pursuing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-red-100 text-red-500">
                        Career
                      </Badge>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-500">
                        Dream Job
                      </Badge>
                      <Badge variant="outline" className="bg-blue-100 text-blue-500">
                        Passion
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon">
                        <HeartIcon className="h-5 w-5 text-red-500" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
                        <span className="sr-only">Comment</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ShareIcon className="h-5 w-5 text-muted-foreground" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUpIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">78</span>
                      <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">21</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Trending Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Sarah Lee</p>
                        <p className="text-sm text-muted-foreground">My Startup Failed, But I Learned So Much</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Michael Johnson</p>
                        <p className="text-sm text-muted-foreground">
                          How I Failed at My Dream Job and Found a New Passion
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Emily Chen</p>
                        <p className="text-sm text-muted-foreground">
                          I Failed My First Coding Interview, But It Made Me a Better Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Featured Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Olivia Nguyen</p>
                        <p className="text-sm text-muted-foreground">
                          How I Failed at My First Startup and Bounced Back
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">David Lee</p>
                        <p className="text-sm text-muted-foreground">
                          My Embarrassing Moment at a Conference and What I Learned
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jessica Huang</p>
                        <p className="text-sm text-muted-foreground">
                          How I Failed to Launch My First Product and Tried Again
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mentoring Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Connect with experienced mentors who can guide you through your failures and help you grow.
                  </p>
                  <Button>
                    <UsersIcon className="mr-2 h-4 w-4" />
                    Join Mentoring Program
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FlagIcon className="h-5 w-5 text-red-500" />
              <span className="text-sm text-muted-foreground">© 2023 落ちナビ. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}