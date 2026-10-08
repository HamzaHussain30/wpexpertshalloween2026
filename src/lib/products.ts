// Sale settings: change here and the whole page follows.
// ponytail: placeholder code (SPOOKY26) - replace with the real coupon before launch.
export const SALE = {
  percent: 26,
  code: "SPOOKY26",
  // local midnight at the end of Oct 31
  endsAt: { year: 2026, monthIndex: 10, day: 1 },
  storeUrl: "https://store.wpexperts.io",
} as const;

export const CATEGORIES = ["B2B", "Checkout", "Pricing", "Engagement", "Store Ops", "Integrations"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Product = {
  name: string;
  slug: string;
  price: number; // monthly, as listed on the store
  from: boolean;
  category: Category;
  blurb: string;
  tag?: "Best seller" | "New";
};

export const salePrice = (price: number) => Math.round(price * (1 - SALE.percent / 100) * 100) / 100;
export const money = (n: number) => `$${n.toFixed(2)}`;
export const productUrl = (slug: string) => `${SALE.storeUrl}/products/${slug}/`;

// [name, slug, price, category, blurb, from?, tag?]
type Row = [string, string, number, Category, string, boolean?, Product["tag"]?];
const rows: Row[] = [
  ["B2B Wholesale", "wholesale-for-woocommerce-pro", 10.75, "B2B", "Wholesale pricing, bulk ordering, user roles and dynamic discounts for B2B customers.", false, "Best seller"],
  ["Donation", "donation-for-woocommerce", 8.33, "Engagement", "Run one-time and recurring donation campaigns right inside WooCommerce.", false, "Best seller"],
  ["Currency Switcher", "currency-switcher-for-woocommerce", 8.33, "Pricing", "Show prices in multiple currencies with automatic exchange-rate updates.", false, "Best seller"],
  ["NetSuite Connector", "netsuite-connector-for-woocommerce", 25, "Integrations", "Sync orders with NetSuite in real time and cut manual work.", false, "New"],
  ["Bulk Product Editor", "bulk-product-editor-for-woocommerce", 4.17, "Store Ops", "Edit hundreds of products at once from a spreadsheet-style screen.", false, "New"],
  ["QCommerce", "quick-commerce", 8.25, "Store Ops", "Real-time order management built for fast-paced quick-commerce stores.", false, "New"],
  ["Abandoned Cart", "abandoned-cart-for-woocommerce", 4.17, "Engagement", "Track, remind and recover abandoned carts with automatic emails."],
  ["Delivery Options", "delivery-slots-for-woocommerce", 4.17, "Checkout", "Offer flexible delivery slots for smoother operations."],
  ["Custom Checkout Fields", "custom-checkout-fields-editor-for-woocommerce", 4.17, "Checkout", "Personalize checkout fields and add new sections."],
  ["Instant Checkout", "instant-checkout-for-woocommerce", 4.17, "Checkout", "A quick, smooth checkout that cuts cart abandonment."],
  ["Product Quantity", "product-quantity-for-woocommerce", 4.17, "Store Ops", "Control how many items customers can buy per product."],
  ["Advanced Order Notes", "advanced-order-notes-for-woocommerce", 2.5, "Checkout", "Better customer communication through richer order notes."],
  ["Variations & Swatches", "bulk-variation-and-swatches-for-woocommerce", 4.17, "Store Ops", "Turn simple products into variable ones and automate the busywork."],
  ["Conditional Fee", "conditional-fees-for-woocommerce", 4.17, "Pricing", "Apply fees by role, product, category and more."],
  ["Loyalty Press", "loyalty-for-woocommerce", 6.67, "Engagement", "Points and rewards that bring customers back."],
  ["Sequence Order Number", "smart-sequence-order-number-for-woocommerce", 4.17, "Store Ops", "Sequential order numbers with custom prefixes."],
  ["Smart Wishlist", "smart-wishlist-for-woocommerce", 4.17, "Engagement", "Let customers keep multiple wishlists at once."],
  ["B2B Payments", "b2b-payments-for-woocommerce", 4.17, "B2B", "Flexible payment methods that lift B2B conversions."],
  ["PDF Invoices & Packing Slips", "pdf-packing-slips-and-invoice-builder-for-woocommerce", 4.17, "Store Ops", "Invoices, credit notes and packing slips, professionally built."],
  ["Discounts & Coupons", "smart-discounts-and-coupons-for-woocommerce", 4.17, "Pricing", "Boost sales with smarter discount and coupon rules."],
  ["Inventory Management", "inventory-management-for-woocommerce", 6.67, "Store Ops", "Stock and supplier coordination in one place."],
  ["Custom Product Addons", "smart-custom-product-addons-and-fields-for-woocommerce", 4.17, "Store Ops", "Add custom fields and extras to any product."],
  ["Pay Your Price", "pay-your-price", 4.17, "Pricing", "Let customers name their own price."],
  ["Store Credits & Gift Cards", "store-credits-gift-cards-for-woocommerce", 4.17, "Engagement", "Store credit and gift cards that build loyalty."],
  ["Role Based Pricing", "dynamic-and-role-based-pricing-for-woocommerce", 4.17, "Pricing", "Custom prices by user role and attribute."],
  ["Restaurant", "restaurant-for-woocommerce", 12.5, "Store Ops", "A full quick-order and delivery system for restaurants."],
  ["B2B Company Credits", "b2b-company-credits-permissions-for-woocommerce", 4.17, "B2B", "Company credit limits and permissions for B2B buyers."],
  ["B2B Invoice Payment", "invoice-payment-gateway-for-woocommerce", 4.17, "B2B", "Invoice-based payment for flexible business deals."],
  ["User Registration", "user-registration-for-woocommerce", 4.17, "Checkout", "Custom registration forms with 25+ field types."],
  ["B2B Product Table", "bulk-order-form-for-woocommerce", 6.67, "B2B", "Bulk order tables with search, sorting and filtering."],
  ["Sales Agent", "sales-agent-for-woocommerce", 4.17, "B2B", "Manage agents, track performance, automate commissions."],
  ["B2B Request a Quote", "quote-for-woocommerce", 4.17, "B2B", "Hide prices and add a Get a Quote button for complex orders."],
  ["Product Bundle", "smart-product-bundle-for-woocommerce", 4.17, "Pricing", "Custom bundles that encourage bigger baskets."],
  ["Tiered Pricing", "tiered-pricing-for-woocommerce", 4.17, "Pricing", "Reward bulk purchases with quantity-based tiers."],
  ["Fundraising", "fundraising-for-woocommerce", 4.17, "Engagement", "Run multiple crowdfunding campaigns and engage supporters."],
  ["Spin Wheel", "spin-wheel-for-woocommerce", 4.17, "Engagement", "Gamified discounts that lift engagement and ROI."],
  ["Address Autocomplete", "address-autocomplete-for-woocommerce", 4.17, "Checkout", "Google Maps address autofill at checkout."],
  ["Keap Integration", "infusion-soft-for-woocommerce", 8.33, "Integrations", "Sync WooCommerce users with Keap contacts automatically."],
  ["Store Finder", "store-finder-for-woocommerce", 4.17, "Store Ops", "Google Maps store locator with live filtering."],
  ["Notifications", "notifications-for-woocommerce", 4.17, "Engagement", "Real-time, customizable FOMO alerts."],
  ["License Manager", "license-manager-for-woocommerce", 10.83, "Store Ops", "Sell and manage digital license keys."],
  ["Gamification", "gamification-for-woocommerce", 6.67, "Engagement", "Reward-driven experiences that keep shoppers playing."],
  ["Age Verification", "woocommerce-product-disclaimer", 4.17, "Checkout", "Age gates and disclaimer pop-ups for sensitive products."],
];

export const PRODUCTS: Product[] = rows.map(([name, slug, price, category, blurb, from, tag], i) => ({
  name, slug, price, category, blurb, tag,
  from: from ?? i >= 6,
}));

// Real plugin icons, downloaded from store.wpexperts.io into /public/products.
const ICON_EXT: Record<string, string> = {"abandoned-cart-for-woocommerce":"svg","address-autocomplete-for-woocommerce":"png","advanced-order-notes-for-woocommerce":"png","b2b-company-credits-permissions-for-woocommerce":"png","b2b-payments-for-woocommerce":"svg","bulk-order-form-for-woocommerce":"png","bulk-product-editor-for-woocommerce":"svg","bulk-variation-and-swatches-for-woocommerce":"svg","conditional-fees-for-woocommerce":"png","currency-switcher-for-woocommerce":"png","custom-checkout-fields-editor-for-woocommerce":"svg","delivery-slots-for-woocommerce":"png","donation-for-woocommerce":"png","dynamic-and-role-based-pricing-for-woocommerce":"svg","fundraising-for-woocommerce":"webp","gamification-for-woocommerce":"png","infusion-soft-for-woocommerce":"png","instant-checkout-for-woocommerce":"png","inventory-management-for-woocommerce":"svg","invoice-payment-gateway-for-woocommerce":"png","license-manager-for-woocommerce":"png","loyalty-for-woocommerce":"svg","netsuite-connector-for-woocommerce":"svg","notifications-for-woocommerce":"png","pay-your-price":"svg","pdf-packing-slips-and-invoice-builder-for-woocommerce":"svg","product-quantity-for-woocommerce":"svg","quick-commerce":"svg","quote-for-woocommerce":"png","restaurant-for-woocommerce":"png","sales-agent-for-woocommerce":"png","smart-custom-product-addons-and-fields-for-woocommerce":"svg","smart-discounts-and-coupons-for-woocommerce":"svg","smart-product-bundle-for-woocommerce":"png","smart-sequence-order-number-for-woocommerce":"webp","smart-wishlist-for-woocommerce":"svg","spin-wheel-for-woocommerce":"png","store-credits-gift-cards-for-woocommerce":"svg","store-finder-for-woocommerce":"png","tiered-pricing-for-woocommerce":"png","user-registration-for-woocommerce":"png","wholesale-for-woocommerce-pro":"png","woocommerce-product-disclaimer":"png"};
export const iconUrl = (slug: string) => `/products/${slug}.${ICON_EXT[slug]}`;
