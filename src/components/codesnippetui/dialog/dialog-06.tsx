"use client";

import * as React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dialog08() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState("account");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline">Setup wizard</Button>} />
      {open && (
        <div>
          <DialogContent showCloseButton={false} className="max-w-md">
            <div>
              <DialogHeader>
                <DialogTitle>Account setup</DialogTitle>
                <DialogDescription>
                  Complete the steps below to get started.
                </DialogDescription>
              </DialogHeader>
            </div>
            <Tabs value={step} onValueChange={setStep} className="mt-4 flex flex-col">
              <TabsList className="flex w-full">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>
              <div>
                <TabsContent value="account" className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Full name
                    </label>
                    <input
                      className="h-8 w-full rounded-lg border border-input bg-input/30 px-2.5 text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                      defaultValue="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      className="h-8 w-full rounded-lg border border-input bg-input/30 px-2.5 text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                      defaultValue="jane@example.com"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="preferences" className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Theme
                    </label>
                    <select className="h-8 w-full rounded-lg border border-input bg-input/30 px-2.5 text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                      <option className="dark:text-black">System</option>
                      <option className="dark:text-black">Light</option>
                      <option className="dark:text-black">Dark</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Notifications
                    </label>
                    <select className="h-8 w-full rounded-lg border border-input bg-input/30 px-2.5 text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                      <option  className="dark:text-black">All</option>
                      <option  className="dark:text-black">Important only</option>
                      <option  className="dark:text-black">None</option>
                    </select>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
            <DialogFooter className="mt-6">
              <DialogClose render={<Button variant="outline">Back</Button>} />
              <Button>Finish setup</Button>
            </DialogFooter>
          </DialogContent>
        </div>
      )}
    </Dialog>
  );
}
