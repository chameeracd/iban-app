<?php

namespace Tests\Unit;

use App\Rules\Iban;
use PHPUnit\Framework\TestCase;

class IbanRuleTest extends TestCase
{
    public function testValidIbans()
    {
        $rule = new Iban();
        $valid = [
            'AL35202111090000000001234567',
            'AD1400080001001234567890',
            'AT483200000012345864',
            'AZ77VTBA00000000001234567890',
            'BH02CITI00001077181611',
            'BY86AKBB10100000002966000000',
            'BR1500000000000010932840814P2',
            'BG18RZBB91550123456789',
            'CR23015108410026012345',
            'HR1723600001101234565',
            'CY21002001950000357001234567',
            'DJ2110002010010409943020008',
            'DO22ACAU00000000000123456789',
            'SV43ACAT00000000000000123123',
            'EE471000001020145685',
            'FK12SC987654321098',
            'HU93116000060000000012345676',
            'IQ20CBIQ861800101010500',
            'IE64IRCE92050112345678',
            'IL170108000000012612345',
            'IT60X0542811101000000123456',
            'KW81CBKU0000000000001234560101',
            'LY38021001000000123456789',
            'MU43BOMM0101123456789101000MUR',
        ];

        foreach ($valid as $iban) {
            $this->assertTrue($rule->checkIBAN($iban));
        }
    }

    public function testInvalidIbans()
    {
        $rule = new Iban();
        $valid = [
            'asdasd',
            'xcvv5454sdfsdfsd',
            'AT48320000001234x5864',
            'sdfsdf54s5df454sdf',
            'sdfsdf45s1df24sd5f4',
            'BY86AKBB10d100000002966000000',
            'BR15000000000dv00010932840814P2',
            'BG18RZBB9155d0123456789',
            'CR2301510841002601v2345',
            'HR17236000011012d34565',
            'CY21002001950v000357001234567',
            'DJ21100020100104d09943020008',
            'DO22ACAU00000000d000123456789',
            'SV43ACAT00000000d000000123123',
            'EE471000001020s145685',
            'FK12SC98765432c1098',
            'HU931160000600v00000012345676',
            'IQ20CBIQ861800x101s010500',
            'IE64IRCE920501f12345678',
            'IL170108000000v0126s12345',
            'IT60X054281110b1000000s123456',
            'KW81CBKU000000d00000012s34560101',
            'LY380210010000x00123456789',
            'MU43BOMM01011234v56789101000MUR',
        ];

        foreach ($valid as $iban) {
            $this->assertFalse($rule->checkIBAN($iban));
        }
    }
}
