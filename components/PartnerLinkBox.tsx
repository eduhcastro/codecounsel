import Link from 'next/link'
import React from 'react'

/**
 * A box that links to a partner's website and displays information about them
 * @param href URL of the partner's website
 * @param title Title of the partner
 * @param description Description of the partner
 * @param items List of items to display under the description
 * @param icon Icon to display on the left of the box
 * @param color Background and text color of the box
 * @returns PartnerLinkBox component
 */
const PartnerLinkBox = ({
  href,
  title,
  description,
  items,
  icon,
  color = 'amber',
}: {
  href: string,
  title: string,
  description: string | JSX.Element,
  items?: string,
  icon?: JSX.Element,
  color?: 'amber' | 'brand' | 'blue'
}) => {

  /**
   * Generates an array of JSX elements from a string of items separated by [_]
   * Only runs if the input content is a string and contains [_] as a separator
   * @param content String of items separated by [_]
   * @returns Array of JSX elements
   */
  const generateItems = (content: string): JSX.Element[] => {
    const itemsArray: JSX.Element[] = [];
    if (typeof content === "string" && content.indexOf("[_]") !== -1) {
      const splitItems = content.split("[_]");
      splitItems.forEach((item, index) => {
        itemsArray.push(
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        );
      });
    }
    return itemsArray;
  };

  // Style object with classes for different background and text colors
  const colors = {
    amber:
      'bg-amber-400 dark:bg-scale-100 group-hover:bg-amber-500 dark:group-hover:bg-amber-300 text-amber-900',
    blue: 'bg-blue-400 dark:bg-scale-100 group-hover:bg-blue-500 dark:group-hover:bg-blue-300 text-blue-900',
    brand:
      'bg-brand-400 dark:bg-scale-100 group-hover:bg-brand-500 dark:group-hover:bg-brand-300 text-brand-900',
  }

  // JSX content of the PartnerLinkBox component
  const content = (
    <div
      className="cursor-pointer hover:bg-scale-300 rounded group px-5 py-4 bg-scale-200 border border-scale-500 dark:border-scale-400">
      <div className="flex flex-col gap-3">
        <div className={`${colors[color]} rounded-md h-8 w-8 flex items-center justify-center transition-all group-hover:scale-110`}>
          {icon}
        </div>
        <div>
          <h5 className="text-base mb-2 text-scale-1200">{title}</h5>
          <p className="p text-sm">{items ? generateItems(items) : description}</p>
        </div>
      </div>
    </div>
  )

  // Renders the PartnerLinkBox inside a Next.js Link component for client-side navigation
  return <Link href={href}>{content}</Link>
}

export default PartnerLinkBox

