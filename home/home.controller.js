/**
 * Created by Jackson on 10/15/16.
 */

(function () {
    function homeController($scope, $mdDialog){
        $scope.projects = [
            {
                title: 'Devcamp.io-frontend',
                subhead: 'A rewrite of the Devcamp.io project using ES6 syntax with Angular 1.x',
                description: 'I decided if I wanted to get serious with this project, I should use the most up-to-date technology. Unfortunately, Angular 2 doesn\'t have the libraries Angular 1 has. I decided to do the next best thing and rewrite it using ES6 syntax. ',
                source: 'https://github.com/yeager-j/devcampio-frontend',
                img: 'AngularJS'
            },
            {
                title: 'Devcamp.io',
                subhead: 'A website dedicated to the community of coding bootcamps',
                description: 'This was my final project for DigitalCrafts. It was built off of my MEAN Starter project but it also features custom forums and school registration. Students can submit feedback about a school. The data is displayed graphically on the school\'s profile page.',
                source: 'https://github.com/yeager-j/devcamp.io',
                demo: 'http://devcamp.io',
                img: 'meanlogo'
            },
            {
                title: 'The Progressive Times',
                subhead: 'A MEAN Stack website built for the new progressive newspaper.',
                description: 'This is the official website for The Progressive Times. I am working closely with other developers on this project. We decided to start with my MEAN Starterkit and work from there. I am responsible for the front-end and design.',
                source: 'https://github.com/the-progressive-times/the-progressive-times',
                img: 'meanlogo'
            },
            {
                title: 'Trump or False!',
                subhead: 'Is that quote from Trump or a parody twitter account? Who knows?',
                description: 'This website uses the Twitter API to pull tweets from Donald Trump. You must determine if the tweet is genuine or a forgery. It gets quite difficult because Trump has said some pretty gauche things during his campaign. Good luck!',
                source: 'https://github.com/yeager-j/trump-or-false',
                demo: 'http://trumporfalse.us',
                img: 'AngularJS'
            },
            {
                title: 'Python Dragon',
                subhead: 'A simple text adventure written in Python.',
                description: 'I\'m very familiar with object-oriented concepts because of my skill in Java. I wanted to test my skills in Python by creating a text-adventure that is fully object-oriented.',
                source: 'https://github.com/yeager-j/python-dragon',
                img: 'python-logo-glassy2'
            },
            {
                title: 'Block\'d Theme',
                subhead: 'A beautiful and open-source template for the Minecrafter in all of us.',
                description: 'I was approached by a client and asked to build a website for his game server. When it was complete, I asked him if I could open-source it (minus a few features) and he agreed. This is the result of my work.',
                source: 'https://github.com/yeager-j/blockd-theme',
                img: 'CSS3'
            }
        ];

        $scope.openBio = function(index, ev){
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title($scope.people[index].name)
                    .textContent($scope.people[index].bio)
                    .ok('Go Away')
                    .targetEvent(ev)
            )
        }
    }

    angular.module('portfolio')
        .controller('homeCtrl', ['$scope', '$mdDialog', homeController])
})();