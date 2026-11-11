
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

export default function Dialog05() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline">View image</Button>} />

      <DialogContent showCloseButton={false} className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Project screenshot</DialogTitle>
          <DialogDescription>
            A preview of the latest dashboard design.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-muted">
          <img
            src="/default.jpg"
            alt="Dashboard preview"
            className="size-full object-cover"
            width={800}
            height={450}
          />
        </div>

        <DialogFooter>
          <DialogClose render={<Button variant="outline">Close</Button>} />
          <Button>Download</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
