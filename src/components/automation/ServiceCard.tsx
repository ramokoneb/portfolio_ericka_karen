
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
      <Card className="h-full">
        <CardHeader>
          <div className="mb-4 p-4 bg-primary/10 rounded-2xl text-primary-dark w-fit">
            {service.icon}
          </div>
          <CardTitle>{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
