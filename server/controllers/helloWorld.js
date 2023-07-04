exports.HelloWorld = async (req, res) => {
    try {
      res.status(200).json({data: "Hello World", status: 'success'});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  };
  