import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    pincode: { type: Number, required: true},
    addressLine: { type: String, required: true},
    landmark: { type: String, required: true},
    city: { type: String, required: true },
    state: { type: String, required: true },
    addressType: { type: String},
    user: {type : mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
},
  {
    timestamps: true,
  }
);
const Address = mongoose.model('Address', addressSchema);
export default Address;

