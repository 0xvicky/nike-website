import {services} from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <div className='flex justify-between max-container flex-wrap gap-9'>
      {services.map(service => {
        return (
          <ServiceCard
            key={service.label}
            {...service}
          />
        );
      })}
    </div>
  );
};

export default Services;
