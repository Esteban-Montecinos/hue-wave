'use client'
import { Button } from "./ui/button";
import { IconHeart } from "./icons/heart-svg";
import { useStore } from "@/hooks/use-store";
import { useTheme } from "@/hooks/use-theme";
import { IconHeartFilled } from "./icons/heart-filled-svg";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function FavoriteButton({ gradient }) {
  const theme = useTheme((state) => state.theme);
  const favorites = useStore((state) => state.favorites);
  const addFavorite = useStore((state) => state.addFavorite);
  const removeFavorite = useStore((state) => state.removeFavorite);
  const isFavorite = favorites?.find(
    ({ encode }) => encode === gradient.encode
  );
  const handleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) {
        removeFavorite(gradient.encode)
        toast.success("El gradiente se elimino de favoritos.");
    }else{
        addFavorite(gradient)
        toast.success("El gradiente se agrego a favoritos.");
    }
  };
  return (
    <Button
      onClick={(e) => handleFavorite(e)}
      className={cn(
        theme === "dark" && "bg-white  hover:bg-neutral-200 text-neutral-800",
        isFavorite && "text-pink-500",
        "size-fit hover:text-pink-500 hover:bg-pink-200 p-2"
      )}
      arial-label="Agregar gradiente a Fvoritos"
      title="Agregar gradiente a Fvoritos"
    >
      {isFavorite ? (
        <IconHeartFilled className="size-4 md:size-5" />
      ) : (
        <IconHeart className="size-4 md:size-5" />
      )}
    </Button>
  );
}
