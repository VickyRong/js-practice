    /**
        * @param {string[]} cpdomains
        * @return {string[]}
        */
       
       var input1 = ["9001 discuss.leetcode.com"];
       var input2 = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];

       var subdomainVisits = function(cpdomains) {
           var output = [];
           var m = {}
           for (cpdomain of cpdomains) {
               count = parseInt(cpdomain.split(' ')[0]);
               domain = cpdomain.split(' ')[1]
                // subdomains = [google.mail.com, mail.com, com]
                var subdomains = subDomains(domain);
                for (subdomain of subdomains) {
                    if (!m[subdomain]) {
                        m[subdomain] = count
                    } else {
                        m[subdomain] += count
                    }
                }
           }
            for(var key in m){
                output.push(m[key]+ " "+ k);
            }
            //   for (var k of Object.keys(m)) {
            //       var str = m[k] + ' ' + k
            //       output.push(str)
            //   }
           return output;
       }

       function subDomains(domain){
           var result = [];
           // items = [goole, mail, com]
           var items = domain.split(".");
           for(var i = 0;i<items.length;i++){
               var tmp = items.slice(i)
               var tmpstr = tmp.join('.')
              result.push(tmpstr);
            }
            return result;
       }
       subdomainVisits(input2)
    //    subDomains('google.mail.com')