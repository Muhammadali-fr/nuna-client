import {
  House,
  Search,
  BellRing,
  CircleUser,
  Settings,
  Signature,
  MessageSquareText,
} from "lucide-react";

export const SidebareLinks = [
  {
    link: "/",
    icon: House,
    name: "Home",
  },
  {
    link: "/",
    icon: Search,
    name: "Search page",
  },
  {
    link: "/",
    icon: BellRing,
    name: "Notifications",
  },
  {
    link: "/",
    icon: CircleUser,
    name: "My profile",
  },
  {
    link: "/",
    icon: <MessageSquareText />,
    name: "Chats",
  },
  {
    link: "/",
    icon: Settings,
    name: "Settings",
  },
  {
    link: "/",
    icon: Signature,
    name: "Authors’ room",
  },
];

export const topics = [
  "programs",
  "vibe_coding",
  "cats",
  "ai",
  "socials",
  "american psycho",
];

// assests
import UserProfileImage from "../icons/sidebar/profile.png";
import Image1 from "../icons/data/image1.png";
import Image2 from "../icons/data/image2.png";

export const posts = [
  {
    userImage: UserProfileImage,
    postName: "n#community_name",
    descr:
      "title of the post that was posted to community by ordinary user who followed to this community by changing select in post page",
    image: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    // image: Image1,
    support: 718,
  }
];
