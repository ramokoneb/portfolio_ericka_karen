
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainService } from "@/types/automation";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: MainService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black h-full rounded-lg overflow-hidden">
        <CardHeader className="px-4 pt-5 pb-2 md:px-6 md:pt-6 md:pb-3">
          <div className="mb-4 text-[#34AEEF] touch-target flex justify-start">
            {service.icon}
          </div>
          <CardTitle className="text-lg md:text-xl text-[#1c3454] tracking-tight">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-5 md:px-6 md:pb-6">
          <CardDescription className="text-base text-[#1c3454] opacity-80 leading-relaxed">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
