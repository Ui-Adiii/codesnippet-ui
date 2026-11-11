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
import { Input} from "@/components/ui/input";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

export default function Dialog03() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline">Edit profile</Button>} />

      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Update your account details below.
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        >
          <FieldGroup>
            <Field>
              <FieldLabel>Full name</FieldLabel>
              <FieldContent>
                <Input placeholder="Jane Doe" defaultValue="Jane Doe" />
              </FieldContent>
              <FieldDescription>
                Displayed publicly on your profile.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel>Email address</FieldLabel>
              <FieldContent>
                <Input type="email" placeholder="jane@example.com" />
              </FieldContent>
              <FieldDescription>
                Used for sign-in and notifications.
              </FieldDescription>
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
