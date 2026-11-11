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

export default function Dialog01() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />

      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Welcome to CodeSnippetUI</DialogTitle>
          <DialogDescription>
            Explore our collection of modern and customizable UI components
            built for React and Next.js.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button onClick={() => setOpen(false)}>Get started</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
