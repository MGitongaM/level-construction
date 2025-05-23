import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuSquare } from "lucide-react";
import ImageView from "./NextCloudinary/ImageView";

export default function NavigationSection() {
  const navigationLinks = [
    {
      id: 1,
      title: "Home",
      hrefLink: "/",
    },
    {
      id: 2,
      title: "About Us",
      hrefLink: "/about-us",
    },
    {
      id: 3,
      title: "Services",
      hrefLink: "/our-services",
    },
    {
      id: 4,
      title: "Products",
      hrefLink: "/products",
    },
    {
      id: 5,
      title: "Contact Us",
      hrefLink: "/contact-us",
    },
  ];
  return (
    <>
      <NavigationMenu className="hidden md:block">
        {/* <NavigationMenuList className="w-[99vw]   bg-teal-100 flex  justify-between items-center px-16 "> */}
        <NavigationMenuList className="w-[99vw] bg-white flex  justify-between items-center px-1 lg:px-16 ">
          <div className="w-full p-2">
            <NavigationMenuItem>
              <Link href={`/`} className="flex items-center">
                <ImageView
                  // imageSrc="level_services_logo_bg-transparent_ellvje"
                  imageSrc="levels_services_transparent_logo_only_zquhit"
                  height={400}
                  width={400}
                  alt=""
                  classNames="object-cover size-12 lg:size-20"
                />
                <p className="font-semibold">Level Services Construction</p>
              </Link>
            </NavigationMenuItem>
          </div>
          <div className=" flex gap-x-2 justify-end w-full">
            {navigationLinks.map((nav) => (
              <NavigationMenuItem key={nav.id}>
                <Link href={nav.hrefLink}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {nav.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      {/* mobile menu */}
      <NavigationMenu className="block md:hidden">
        <NavigationMenuList>
          <div className="w-[99vw] flex justify-between items-center px-1">
            <div className="c">
              <NavigationMenuItem>
                <Link href={`/`} className="flex items-center">
                  <ImageView
                    imageSrc="levels_services_transparent_logo_only_zquhit"
                    height={400}
                    width={400}
                    alt=""
                    classNames="object-contain size-20"
                  />
                  <p className="font-semibold text-xs">
                    Levels Services Logistics
                  </p>
                </Link>
              </NavigationMenuItem>
            </div>
            <div className="c">
              <Sheet>
                <SheetTrigger>
                  <MenuSquare className="text-teal-400" />
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <div className=" flex flex-col gap-x-2 justify-end items-end list-none text-left pr-10 w-full">
                    {navigationLinks.map((nav) => (
                      <NavigationMenuItem key={nav.id}>
                        <Link href={nav.hrefLink}>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {nav.title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
