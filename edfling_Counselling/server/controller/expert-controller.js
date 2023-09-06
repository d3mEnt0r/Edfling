import Experts from '../model/experts.js';

export const renderExperts = async(request, response) => {
    Experts.find().sort({ online: -1 })
              .then((experts) => {
                response.json(experts); // send the list of experts as the response
              })
              .catch((err) => {
                console.log(err);
                response.status(500).json({ message: 'Error retrieving experts' });
    });
}


export const IDExpert = async (request, response) => {
  try {
      const expert = await Experts.findById(request.params.id);

      return response.status(200).json(expert);
  } catch (error) {
      return response.status(500).json({ msg: error.message})
  }
}