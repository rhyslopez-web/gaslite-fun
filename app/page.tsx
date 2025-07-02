import { Button } from "@/components/ui/button";
import FirstHeading from "@/components/ui/FirstHeading";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Home() {



  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5">
        <Label>Enter Your Message</Label>
        <Textarea className="w-5/6 mx-auto"/>
      </div>
    </div>
  );
}
