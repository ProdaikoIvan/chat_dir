(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChatCtrl', ChatCtrl);

    ChatCtrl.inject = ['$scope', 'webSocketRequest', 'requestFactory'];
    function ChatCtrl($scope, webSocketRequest, requestFactory) {
        var vm = this;

        vm.showLogo = true;
        //true = скрол вниз false = скрол вверх
        vm.scroll = true;
        vm.sentMessage = sentMessage;
        vm.loadMoreMessage = loadMoreMessage;

        vm.newMessage = "";

        vm.messages = [
                {
                    message: "ghbdtnwertwertwegdfsgsdfg sdfgs dfgsdfgsdf gsdfgsdfg sdfgsdfgsdfgsrgsdasdf adsf adsf asdf asdf asdf asdf asdf asdf asdf fgs dfgsdfg",
                    date: 1500908062800,
                    userFlag: true
                },
                {message: "ghbdtn", date: 1500908062800, userFlag: false},
                {message: "ghbdtn", date: 1500908062800, userFlag: true},
                {message: "ghbdtn", date: 1500908062800, userFlag: true},
                {message: "ghbdtn", date: 1500908062800, userFlag: false},
                {message: "ghbdtn", date: 1500908062800, userFlag: false},
                {message: "ghbdtn", date: 1500908062800, userFlag: true}
            ];

        function sentMessage() {
            if(vm.newMessage === '')return;
            vm.messages.push({message: vm.newMessage, date: new Date().getTime(), userFlag: true})
            vm.newMessage = '';
        }
        function loadMoreMessage(){
            console.log('load')
        }
        $scope.$on('selectUser', function(obj, data){
            console.log(data);
            vm.showLogo = false;
            //vm.messages  = requestFactory.request(null,null ,data);
            console.log( vm.messages);
        });
    }
})();