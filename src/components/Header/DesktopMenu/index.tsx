"use client";

import React, { Suspense, } from "react";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Style from "./styles";

const monthNames = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
const currentMonth = monthNames[new Date().getMonth()];

export  function DesktopMenu({}) {
  return (
    <Style.NavigationMenuRoot>
      <Style.NavigationMenuList>
        <NavigationMenu.Item>
          <Style.NavigationMenuLink href="https://github.com/radix-ui">
            Início
          </Style.NavigationMenuLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Style.NavigationMenuLink href="https://github.com/radix-ui">
            Frete grátis
          </Style.NavigationMenuLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Style.NavigationMenuLink href="https://github.com/radix-ui">
            Promoções de {currentMonth}
          </Style.NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Style.NavigationMenuTrigger>
            Blog <Style.CaretDown aria-hidden />
          </Style.NavigationMenuTrigger>

          <Style.NavigationMenuContent>
            <Style.List>
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <Style.Callout href="/">
                    <Style.CalloutHeading>Wizen Prime</Style.CalloutHeading>
                    <Style.CalloutText>
                      A experiência VIP que você merece!
                    </Style.CalloutText>
                  </Style.Callout>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
            </Style.List>
          </Style.NavigationMenuContent>
        </NavigationMenu.Item>

        <Style.NavigationMenuIndicator>
          <Style.Arrow />
        </Style.NavigationMenuIndicator>
      </Style.NavigationMenuList>

      <Style.ViewportPosition>
        <Style.NavigationMenuViewport />
      </Style.ViewportPosition>
    </Style.NavigationMenuRoot>
  );
}
export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Style.ListItemLink {...props} ref={forwardedRef}>
          <Style.ListItemHeading>{title}</Style.ListItemHeading>
          <Style.ListItemText>{children}</Style.ListItemText>
        </Style.ListItemLink>
      </NavigationMenu.Link>
    </li>
  )
);
