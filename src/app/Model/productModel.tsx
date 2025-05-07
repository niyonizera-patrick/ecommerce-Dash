import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  'Basic Info',
  'Details',
  'Image & Gender',
  'Pricing'
];

export default function CreateProductModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    ageGroup: '',
    trend: '',
    category: '',
    color: '',
    description: '',
    discount: '',
    gender: '',
    image: null,
    name: '',
    price: '',
    size: '',
    tags: '',
    quantity: '',
  });

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.ageGroup && formData.category;
      case 1:
        return formData.color && formData.description;
      case 2:
        return formData.gender && formData.name;
      case 3:
        return formData.price && formData.quantity;
      default:
        return true;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl w-full">
        <DialogHeader>
          <DialogTitle>{steps[step]}</DialogTitle>
        </DialogHeader>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 mt-4"
          >
            {step === 0 && (
              <>
                <Select onValueChange={v => handleChange('ageGroup', v)}>
                  <SelectTrigger><SelectValue placeholder="Select Age Group" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adult">Adult</SelectItem>
                    <SelectItem value="teen">Teen</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Trend Drip (optional)" onChange={e => handleChange('trend', e.target.value)} />
                <Input placeholder="Category (e.g. necklace)" onChange={e => handleChange('category', e.target.value)} />
              </>
            )}

            {step === 1 && (
              <>
                <Input placeholder="Color" onChange={e => handleChange('color', e.target.value)} />
                <Textarea placeholder="Description" onChange={e => handleChange('description', e.target.value)} />
                <Input type="number" placeholder="Discount % (optional)" onChange={e => handleChange('discount', e.target.value)} />
              </>
            )}

            {step === 2 && (
              <>
                <Select onValueChange={v => handleChange('gender', v)}>
                  <SelectTrigger><SelectValue placeholder="Gender" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Product Name" onChange={e => handleChange('name', e.target.value)} />
                <Input type="file" onChange={e => handleChange('image', e.target.files?.[0])} />
              </>
            )}

            {step === 3 && (
              <>
                <Input type="number" placeholder="Price" onChange={e => handleChange('price', e.target.value)} />
                <Input placeholder="Size (e.g. M, L)" onChange={e => handleChange('size', e.target.value)} />
                <Input placeholder="Tags (comma separated)" onChange={e => handleChange('tags', e.target.value)} />
                <Input type="number" placeholder="Quantity" onChange={e => handleChange('quantity', e.target.value)} />
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-6">
          <Button variant="ghost" onClick={prevStep} disabled={step === 0}>Back</Button>
          {step < steps.length - 1 ? (
            <Button onClick={nextStep} disabled={!canProceed()}>Next</Button>
          ) : (
            <Button onClick={() => console.log(formData)} disabled={!canProceed()}>
              Submit
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}