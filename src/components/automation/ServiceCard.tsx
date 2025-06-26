
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainService } from "@/types/automation";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: MainService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full">
        <CardHeader className="px-6 pt-6 pb-4">
          <div className="mb-4 p-3 bg-[#3182CE]/10 rounded-xl text-[#3182CE] w-fit">
            {service.icon}
          </div>
          <CardTitle className="text-xl md:text-2xl text-[#1A202C] font-semibold leading-tight">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <CardDescription className="text-base text-[#4A5568] leading-relaxed">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
