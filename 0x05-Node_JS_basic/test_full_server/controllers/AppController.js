class AppController {
  static function getHomepage(request, response) {
    response.statusCode === '200';
    response.send('Hello Holberton School!');
  }
}

module.exports = AppController;
