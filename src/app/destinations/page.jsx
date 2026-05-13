import DestinationCard from "@/components/DestinationCard";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import { ComboBox, Input, Label, ListBox } from "@heroui/react";

const DestinationsPage = () => {
  const allDestinations = Array(5).fill({
    location: "Indonesia",
    title: "Bali Paradise",
    price: "2700",
    duration: "7 Days/6 Nights",
    rating: "4.5",
    image: "/assets/destinations/image1.png",
  });

  return (
    <div className="w-[90%] mx-auto mt-9 mb-9 space-y-5">
      <div>
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
          Explore All Destinations
        </h2>
        <p className="text-gray-500 text-base md:text-lg font-light">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      <div className="grid grid-cols-3">
        <ComboBox aria-label="category" className="border rounded-lg">
          <ComboBox.InputGroup>
            <Input placeholder="CATEGORY" />
            <ComboBox.Trigger />
          </ComboBox.InputGroup>
          <ComboBox.Popover>
            <ListBox>
              <ListBox.Item id="category" textValue="Category">
                Category
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </ComboBox.Popover>
        </ComboBox>
        <ComboBox aria-label="category" className="border rounded-lg">
          <ComboBox.InputGroup>
            <Input placeholder="PRICE RANGE" />
            <ComboBox.Trigger />
          </ComboBox.InputGroup>
          <ComboBox.Popover>
            <ListBox>
              <ListBox.Item id="price" textValue="Price">
                Price
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </ComboBox.Popover>
        </ComboBox>
        <ComboBox aria-label="category" className="border rounded-lg">
          <ComboBox.InputGroup>
            <Input placeholder="SORT BY" />
            <ComboBox.Trigger />
          </ComboBox.InputGroup>
          <ComboBox.Popover>
            <ListBox>
              <ListBox.Item id="sort" textValue="Sort">
                Sort
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </ComboBox.Popover>
        </ComboBox>
      </div>

      <div>
        <p className="text-gray-500 text-base md:text-lg font-light">
          Showing {allDestinations.length} destinations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {allDestinations.map((dest, index) => (
          <div key={index} className="shadow-2xl rounded-lg p-2">
            <DestinationCard
              {...dest}
              // এখানে motion কাজ করবে না, সাধারণ হোভার ইফেক্ট কাজ করবে
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
